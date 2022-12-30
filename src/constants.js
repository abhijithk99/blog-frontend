import CheckList from '@editorjs/checklist'
import Code from '@editorjs/code'
import Delimiter from '@editorjs/delimiter'
import Embed from '@editorjs/embed'
import Image from '@editorjs/image'
import InlineCode from '@editorjs/inline-code'
import LinkTool from '@editorjs/link'
import List from '@editorjs/list'
import Marker from '@editorjs/marker'
import Quote from '@editorjs/quote'
import Raw from '@editorjs/raw'
import SimpleImage from '@editorjs/simple-image'
import Table from '@editorjs/table'
import Warning from '@editorjs/warning'
import Paragraph from '@editorjs/paragraph'
import axios from 'axios'



export const EDITOR_JS_TOOLS = {
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
    },
    embed: Embed,
    table: Table,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: {
        class: Image,
        config: {
            //  endpoint: 'http://localhost:8008/fetchUrl',
            uploader: {
                uploadByFile(file) {

                    axios.post(
                        "http://localhost:3200/post/",
                        { img: file }
                    )
                        .then((res) => console.log("success, dictionary sent,", res, file))
                        .catch((err) => {
                            console.log(err.response);
                        });


                    // // your own uploading logic here
                    // return MyAjax.upload(file).then(() => {
                    //     return {
                    //         success: 1,
                    //         file: {
                    //             url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
                    //         }
                    //     };
                    // });
                },
            }
        }
    },
    raw: Raw,
    quote: Quote,
    marker: Marker,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,

}
