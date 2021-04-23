import { useState } from 'react'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'

export default function ImageUpload({ evtId, imageUploaded }) {
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('files', image) // The files to upload
    formData.append('ref', 'events') // The name of the model which the file will be linked to
    formData.append('refId', evtId) // The ID of the entry
    formData.append('field', 'image') // The field of the entry
    // https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html#upload-files-related-to-an-entry

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData,
    })

    if (res.ok) {
      imageUploaded()
    }
  }

  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type='file' onChange={handleFileChange} />
        </div>
        <input type='submit' value='Upload' className='btn' />
      </form>
    </div>
  )
}
