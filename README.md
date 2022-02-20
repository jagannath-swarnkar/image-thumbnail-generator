# image-thumbnail-generator

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/image-thumbnail-generator.svg)](https://www.npmjs.com/package/image-thumbnail-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save image-thumbnail-generator
```

## Codesandbox Demo
[click here to visit](https://codesandbox.io/s/image-thumbnail-generator-igq5og)

<br/>

## Usage

```tsx
import React from 'react'
import { getThumbnailUrl } from 'image-thumbnail-generator'


const App = () => {
  const [image, setImage] = React.useState()
  const [thumbnail, setThumbnail] = React.useState()

  const handleUploadImage = async (e: any) => {
    const file = e.target.files[0]
    const result: any = await getThumbnailUrl(file, 100, 100)
    setImage(result.image)
    setThumbnail(result.thumbnail)
  }
  return (
    <div className='container'>
      <div className='input-group mt-3 mb-5'>
        <input
          onChange={handleUploadImage}
          type='file'
          className='form-control'
          id='inputGroupFile01'
        />
      </div>
      <div className='d-flex'>
        <div className='image_cont border'>
          <img src={image} className='image' alt='original image' />
        </div>
        <div className='image_cont border'>
          <img src={thumbnail} alt='thumbnail image' />
        </div>
      </div>
    </div>
  )
}

export default App
```

## License

MIT © [jagannath-swarnkar](https://github.com/jagannath-swarnkar)
