import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded,setExpanded]=React.useState(false);
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleClick(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded&&<input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          onClick={handleClick}
          rows={isExpanded?"3":"1"}
          value={note.content}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
