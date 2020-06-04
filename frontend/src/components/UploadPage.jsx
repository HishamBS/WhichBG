import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const UploadPage = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
        axios.post('/posts/newpost',
        {
            post_title:title,
            post_desc:desc,
            post_image:url
        })
        .then((data) => {            
          if (data.error) {
            M.toast({ html: data.error, classes: "#c62828 red darken-3" });
          } else {
            M.toast({
              html: "Created post Successfully",
              classes: "#43a047 green darken-1",
            });
            history.push("/");
            window.location.reload(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "whichbg");
    data.append("cloud_name", "dfrj1nea2");
    axios.post("https://api.cloudinary.com/v1_1/dfrj1nea2/image/upload",data)
      .then((data) => {          
        setUrl(data.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card input-filed"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span style={{color:"white"}}>Uplaod Image</span>
          <input type="file" accept=".gif,.jpg,.jpeg,.png" onChange={(e) => setImage(e.target.files[0])} maxSize={2097152}/>
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
      style={{color:"white"}}
        className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={() => postDetails()}
      >
        Submit post
      </button>
    </div>
  );
};

export default UploadPage;
