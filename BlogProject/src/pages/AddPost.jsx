import React from 'react'
import { PostForm } from '../components/index'
import { Contanier } from '../components/index'


function AddPost() {
    return (
        <div className='py-8'>
            <Contanier>
                <PostForm />
            </Contanier>
        </div>
    )
}

export default AddPost
