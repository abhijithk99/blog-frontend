
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
//import Image from '@editorjs/image'

import EditorJs from '@natterstefan/react-editor-js'

import { EDITOR_JS_TOOLS } from './constants'

class App extends Component {
    async onSave() {
        const outputData = await this.editorInstance.save()
        console.log('outputData', outputData)
    }

    render() {
        return (
            <div className="app">
                <div className="actions">
                    <button onClick={this.onSave.bind(this)} type="button">
                        post
                    </button>
                </div>
                <EditorJs
                    editorInstance={instance => (this.editorInstance = instance)}
                    tools={EDITOR_JS_TOOLS}

                />
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
