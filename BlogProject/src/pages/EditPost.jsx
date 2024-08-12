import React, { useEffect, useState } from 'react';
import { Contanier, PostForm } from '../components/index';
import appwriteService from '../appwrite/databaseConfig'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {

    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    // console.log(post);
                    if (post) {
                        setPost(post);
                    }
                })
        }
        else {
            navigate('/');
        }
    }, [slug, navigate]);

    return post ? (
        <div className='py-8'>
            <Contanier>
                <PostForm post={post} />
            </Contanier>
        </div>
    ) : null;
}

export default EditPost
