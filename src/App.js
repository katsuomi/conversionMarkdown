import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ReactMarkdown from 'react-markdown'
import marked from 'marked'

const App = () => {
  const [inputContent, setInputContent] = useState('');
  // console.log(inputContent) // markdown変換
  console.log(marked(inputContent)) //html変換
  return (
    <Grid container>
      <Grid item xs={6}>
      <TextField
        id="outlined-multiline-static"
        label="markdown"
        multiline
        rows="300"
        margin="normal"
        variant="outlined"
        style={{width: "100%"}}
        onChange={(e) => {setInputContent(e.target.value)}}
      />
      </Grid>
      <Grid item xs={6} style={{paddingLeft: "20px"}}>
        <ReactMarkdown
          source={inputContent}
          escapeHtml={false}
        />
      </Grid>
    </Grid>
  )
}

export default App