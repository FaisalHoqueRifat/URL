import React, { useState } from 'react'
import axios from "axios";
const Create = () => {
    const [url, setUrl] = useState("");
    const [res, setRes] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8081/url", {url});
        setRes(res.data);
    }

  return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>
                URL:
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                </label>
                <button type="submit">Submit</button>
            </form>

            <div>
                <h2>Response:</h2>
                <span>{JSON.stringify(res, null, 2)}</span>
             </div>

        </div>
      

  )
}

export default Create;
