import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

// ab ye control kya hia ye control react hook form se aata hai or yehi hame iss component ko form ki trah use krne me help arega 
export default function RTE({ name, control, label, defaultValue = "" }) {
  const apiKey = 'cl6lq0ebnemgfbz93dt6dmxaw7th7jqohuihombtdbzknql6'
  const cdnSrc = `https://cdn.tiny.cloud/1/${apiKey}/tinymce/7/tinymce.min.js`
  return (
    <div className='w-full'> 
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control} //jo bhi parent element yahan call krega ham as it is yhn pass krenge vo pura control le paaye jisse pata lage jitne bhi state and all hai sabka 
        render={({field:{onChange, value}})=>(
            //render se mtlb hai hamara ki if input hai to input lelo ya fir editor hai edit krwalo 
            //ekbaar document padna padta hai bhai darr mat
            <Editor
              apiKey={apiKey}
              tinymceScriptSrc={cdnSrc}
              scriptLoading={{ async: true, defer: true }}
              initialValue={defaultValue}
              init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
              }}
              onEditorChange={onChange}
              value={value}
            />
        )}
      />
    </div>
  )
}


// ham div ke andar seedha editor paas kr skte hai 
{/* // sirf editor bhi return kar skte hai jese 
    <Editor 
    intitialValue = 'defaultvalue'
    init ={
    {branding : false,
    height : 500,
    menubar : true,
    plugins :[
        'advist ........ wordcount '//coc me se dekh ke likhdo 

    ],
    toolbar:['wibeibib']
  }}/> */}
