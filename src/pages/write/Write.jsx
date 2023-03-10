import './write.css'
import dumImg from '../../assets/5.jpg'

import { TbLayoutGridAdd } from 'react-icons/tb'

const Write = () => {
  return (
    <div className="write">
        <img src={dumImg} alt="Overview"className='writeImg' />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <TbLayoutGridAdd className='writeIcon' />
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>

        <button className='writeSubmit'> Publish </button>
      </form>
    </div>
  )
}

export default Write
