import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

function RTE({
    name,
    control,
    label,
    defaultValue = ''
}) {
    return (
        <>
            {label && <label className='text-lg font-medium'>{label}</label>}

            <Controller
                name={name || "Content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey='wxf7sxjr66jd9g3g55j561v9xiqk45xhvva8au880yr64v0c'
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 350,
                            menubar: true,
                            plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />

        </>
    )
}

export default RTE
