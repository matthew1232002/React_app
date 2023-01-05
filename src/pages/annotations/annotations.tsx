import React, { useEffect, useState, ChangeEvent, BaseSyntheticEvent } from 'react';
import css from './annotations.module.scss';
import defaultImage from '~/assets/images/default.png'
import { useAnnotations } from '~/pages/annotations/hooks/useAnnotations';
import { AnnotationResponse } from '~/pages/annotations/types';
import Form from '~/pages/annotations/components/Form/Form';
import Annotation from '~/pages/annotations/components/Annotation/Annotation';
import { DOT_SIZE } from '~/pages/annotations/constants';
import Footer from '~/app/footer';

export const Annotations: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<{top: number, left: number}>({top: 0, left: 0});
  const [containerEl, setContainerEl] = useState<{width: number, height: number}>({width: 0, height: 0});
  const {fetch, data} = useAnnotations();

  const calculateContainerCord = () => {
      const elem: HTMLElement =  document.getElementById('annotations-container')!;
      const rect =  elem.getBoundingClientRect();
       setContainerEl({width: rect.width, height: rect.height})
    }

  useEffect(() => {
    fetch()
  }, [])

  useEffect(() => {
    setTimeout(calculateContainerCord, 200)
  }, [selectedImage])

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(event.target.files![0]);
    setIsFormOpen(false)
  };

  const handleLoad = () => {
    calculateContainerCord()
  };

  const handleAddAnnotation = (event: BaseSyntheticEvent<any>) => {
    event.stopPropagation()
    setAnchorEl({ top: event.nativeEvent.layerY, left: event.nativeEvent.layerX})
    setIsFormOpen((prevState) => !prevState)
  };

  return (
    <div className={css.main} onClick={() => setIsFormOpen(false)}>
      <div className={css.wrapper}>
        <div className={css.title}>
          <h1>{selectedImage ? selectedImage.name : 'Here goes the file name'}</h1>
          <label htmlFor="upload">Upload image</label>
          <input
            id='upload'
            type='file'
            name='myImage'
            onChange={onFileChange}
            hidden
          />
        </div>

        <div className={css.image}>
          <div className={css.imageContainer} onClick={handleAddAnnotation} id='annotations-container'>
            {selectedImage ? (
              <img alt='image' src={URL.createObjectURL(selectedImage)}/>
            ) : <img alt='image' src={defaultImage} onLoad={handleLoad}/>}

            {data.map((annotation: AnnotationResponse) => {
              const left = Math.round(annotation.pos.x * containerEl.width - DOT_SIZE / 2) + 'px'
              const top = Math.round(annotation.pos.y * containerEl.height) - DOT_SIZE / 2 + 'px'
              return (
                <Annotation key={annotation.id} top={top} left={left} annotation={annotation} />
            )
            })}

            {isFormOpen && <Form anchorEl={anchorEl} containerEl={containerEl} setIsFormOpen={setIsFormOpen}/>}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};