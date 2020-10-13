import React, { useState, useEffect } from "react";

import { MdLink, MdCheckCircle, MdError } from 'react-icons/md'
import { projectStorage } from "../../services/firebase";
import { CircularProgressbar } from 'react-circular-progressbar';

import './styles.css';
import "react-circular-progressbar/dist";

function Upload({passUploadUrl, passUploadImg}) {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);


  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);
      } else {
        setFile(null);
        setError("Somente envio de imagens png ou jpg ");
      }
    }
  };

  useEffect(() => {
    if (file) {

      /* Referencia para o storage do firebase criando uma pasta com o nome de products */
      const storageRef = projectStorage.ref(`products/${file.name}`);

      storageRef.put(file).on("state_changed", upload => {
        let percentage = Math.round((upload.bytesTransferred / upload.totalBytes) * 100);
        setProgress(percentage);
      }, err => {
        setError(err);
      }, async () => {
        const downloadUrl = await storageRef.getDownloadURL();
        setUrl(downloadUrl);
      }
      );
      
      passUploadImg(file.name);
      
    }
  }, [file]);
  
  passUploadUrl(url);

  function handledelete() {
    const storageRef = projectStorage.ref('products');

    storageRef.child(file.name).delete().then( () => {
      setFile(null);
      setError(null);
      setProgress(0);
      setUrl(null);
    }).catch(err => {
      setError(err);
    })
  }

  return (
    <>
      <div className="container">
        <div className="content">

          <div className="file-upload">
            
              <label for="file-input">Adicionar uma imagem</label>
              {!url &&
              <input 
                id="file-input" 
                type="file"
                onChange={handleChange}
               />
              }
            
          </div>

          {error && <MdError style={{alignSelf:"center"}} size={45} color="#e57878"/> }

          <ul className="file-container">
            <li>
              {url && file &&
                <div className="preview">
                  <img src={url}></img>

                  <div className="file-info">
                    <div>
                      <strong>{file.name}</strong>
                      <span>
                        {!!url && (
                          <button onClick={() => handledelete()}>
                            Excluir
                          </button>
                        )}
                      </span>
                    </div>
                  </div>

                </div>
              }

              <div>
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                  </a>
                )}
                {file && !url && 
                  <CircularProgressbar
                    styles={{
                      root: { width: 100 },
                      path: { stroke: "#ffc93c" }
                    }}
                    strokeWidth={10}
                    minValue={0}
                    maxValue={100}
                    value={progress}
                  />
                }
                {url && <MdCheckCircle style={{marginLeft: 8}} size={24} color="#78e5d5" />}

              </div>
            </li>
          </ul>

        </div>
      </div>

    </>

  );
}

export default Upload;