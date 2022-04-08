import React from 'react';

const ProductForm = () => {
    return (
        <div>
            <h1>Create product</h1>
            <form>
               <div className='container_input'>
                   <label htmlFor='name'>Nombre</label>
                   <input 
                    type='text'
                    aria-label='name'
                    name='name'
                    id='name'
                    placeholder='Walter'
                   />
               </div>
               <div className='container_input'>
                   <label htmlFor='size'>Talle: </label>
                   <input 
                    type='text'
                    aria-label='size'
                    name='size'
                    id='size'
                    placeholder='XS'
                   />
               </div>
               <div className='container_input'>
                   <label htmlFor='description'>Descripción</label>
                   <textarea 
                    type='text'
                    aria-label='description'
                    name='description'
                    id='description'
                    placeholder='Descripción... '
                   >
                </textarea>
               </div>
            </form>
        </div>
    );
}

export default ProductForm;
