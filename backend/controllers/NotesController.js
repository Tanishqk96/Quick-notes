const NotesModel = require('../config/models/notes');

const createnotes = async (req,res) =>{
    const {title, content} = req.body||{};
    const userId =  req.userId;
      if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
    try {
        const newnote = new NotesModel({title, content, userId});
        await newnote.save();
        res.status(201).json(newnote);
    } catch (error) {
        res.status(500).json({message:'error'});
    }
}
const getnotes = async (req, res) => {
  const userId = req.userId; // Set in the JWT middleware

  try {
    const notes = await NotesModel.find({ userId });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Failed to fetch notes" });
  }
};
const updatenotes = async (req, res) => {
  const noteId = req.params.id;
  const userId = req.userId;
  const { title, content } = req.body;

  try {
    const note = await NotesModel.findOne({ _id: noteId, userId  });
    if (!note) return res.status(404).json({ message: "Note not found" });

    if (title) note.title = title;
    if (content) note.content = content;

    const updatedNote = await note.save();
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Error updating note" });
  }
};
const deletenotes = async (req, res) => {
  const noteId = req.params.id;
  const userId =req.userId;

  try {
    const deleted = await NotesModel.findOneAndDelete({ _id: noteId, userId });
    if (!deleted) return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Error deleting note" });
  }
};

module.exports = {createnotes,getnotes,updatenotes,deletenotes};