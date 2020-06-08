import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { checkAuth } from "./functionAuth";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const UploadPage = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
      axios
        .post("/api/v1/posts/newpost", {
          post_title: title,
          post_desc: desc,
          post_image: url,
          post_owner: localStorage.getItem("user_id"),
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
    if (title && desc && image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
      axios
        .post(process.env.REACT_APP_CLOUDINARY_API, data)
        .then((data) => {
          setUrl(data.data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      swal({
        title: "No!",
        text: "All Fields Must Be Filled",
        icon: "error",
        button: "ok",
      });
    }
  };
  checkAuth();
  return (
    <div
      className="card input-filed"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
      id="upload_card"
    >
      <Helmet>
        <title>{"WhichBG? - Upload"}</title>
      </Helmet>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="upload_title"
        maxLength="20"
      />
      <input
        type="text"
        placeholder="description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        id="upload_desc"
        maxLength="55"
      />
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span style={{ color: "white" }}>Uplaod Image</span>
          <input
            id="upload_selectimage"
            type="file"
            accept=".gif,.jpg,.jpeg,.png"
            onChange={(e) => {
              if (e.target.files[0].size > 2097152) {
                swal({
                  title: "No!",
                  text: "Image is larger than 2mb",
                  icon: "error",
                  button: "sorry",
                });
              } else {
                setImage(e.target.files[0]);
              }
            }}
            maxSize={2097152}
          />
        </div>

        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        id="upload_submit"
        style={{ color: "white" }}
        className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={() => postDetails()}
      >
        Submit post
      </button>
      <div>
        <p style={{ color: "red", fontSize: "12px" }}>
          2mb max size , only following formats (gif,jpg,jpeg,png)
        </p>
      </div>
    </div>
  );
};

export default UploadPage;
