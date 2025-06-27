import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Note = {
  _id: string;
  title: string;
  content: string;
};

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  const fetchnotes = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/notes', { headers });
      setNotes(res.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const createOrUpdateNote = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingNoteId) {
        await axios.put(`http://localhost:3000/api/notes/${editingNoteId}`, { title, content }, { headers });
        setEditingNoteId(null);
      } else {
        await axios.post('http://localhost:3000/api/notes', { title, content }, { headers });
      }
      setTitle('');
      setContent('');
      fetchnotes();
    } catch (err) {
      console.error('Error creating/updating note:', err);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/notes/${id}`, { headers });
      fetchnotes();
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  const editNote = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingNoteId(note._id);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchnotes();
  }, []);

return (
  <div style={{
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#2c3e50'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#34495e'
      }}>
        📝 QuickNotes
      </h1>
      <button
        onClick={logout}
        style={{
          background: '#e74c3c',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '30px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
        Logout
      </button>
    </div>

    <form
      onSubmit={createOrUpdateNote}
      style={{
        background: '#ecf0f3',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff',
        marginBottom: '40px'
      }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
        required
        style={{
          width: '100%',
          padding: '12px 15px',
          marginBottom: '12px',
          fontSize: '16px',
          borderRadius: '10px',
          border: '1px solid #ccc'
        }}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note..."
        rows={5}
        required
        style={{
          width: '100%',
          padding: '12px 15px',
          fontSize: '16px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          resize: 'vertical'
        }}
      />
      <button
        type="submit"
        style={{
          marginTop: '15px',
          background: editingNoteId ? '#f39c12' : '#27ae60',
          color: 'white',
          padding: '12px 25px',
          fontSize: '16px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          transition: 'background 0.3s',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
        {editingNoteId ? 'Update Note' : 'Add Note'}
      </button>
    </form>

    <div>
      {notes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999', fontSize: '18px' }}>📭 No notes yet. Start writing!</p>
      ) : (
        notes.map(note => (
          <div key={note._id} style={{
            background: '#fdfefe',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '20px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer'
          }}>
            <h3 style={{
              fontSize: '1.4rem',
              marginBottom: '10px',
              color: '#2c3e50'
            }}>
              {note.title}
            </h3>
            <p style={{ fontSize: '16px', color: '#555' }}>{note.content}</p>
            <div style={{ marginTop: '15px' }}>
              <button onClick={() => editNote(note)} style={{
                marginRight: '10px',
                background: '#2980b9',
                color: 'white',
                padding: '8px 15px',
                border: 'none',
                borderRadius: '25px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                ✏️ Edit
              </button>
              <button onClick={() => deleteNote(note._id)} style={{
                background: '#c0392b',
                color: 'white',
                padding: '8px 15px',
                border: 'none',
                borderRadius: '25px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                🗑️ Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);
};

export default Dashboard;
