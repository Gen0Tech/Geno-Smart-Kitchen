import React, { Component } from 'react'
import Scanner from './Scanner'
import {Fab, TextareaAutosize, Paper} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

class BarcodeScanner extends Component {
  state = {
    results: [],
  }

  _scan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  _onDetected = result => {
    this.setState({ results: [] })
    this.setState({ results: this.state.results.concat([result]) })
  }

  handleAdd = async () => {
    console.log(this.state.results[0].codeResult.code)
    let name = this.state.results[0].codeResult.code
   await fetch('http://localhost:4000/items').then((result) => {
      return result.json()
    }).then((data) => {
      for(const key in data){
        if(data[key].item === name){
          if(data[key].no_scans === 0){
            this.itemIn(key)
            return
          } 
          if(data[key].no_scans === 1){
            this.itemOut(key)
            return
          }
        }
      }
    })
  }

  itemIn = async (id) => {
    try {
      let no_scans = 1;
      await fetch(`http://localhost:4000/items/${id}`, {
          method: "UPDATE",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(no_scans)
        })
  } catch (error) {
   console.log("ERROR")   
  }
  }

  itemOut = (id) => {

  }

  render() {
    return (
      <div>
        <Link to="/home">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
        </Link>
        <span>Barcode Scanner</span>
        
        <Paper variant="outlined" style={{marginTop:30, width:340, height:260}}>
          <Scanner onDetected={this._onDetected} />
        </Paper>

        <TextareaAutosize
            style={{fontSize:32, width:520, height:100, marginTop:30}}
            rowsMax={4}
            defaultValue={'No data scanned'}
            value={this.state.results[0] ? this.state.results[0].codeResult.code : 'No data scanned'}
        />
          <br></br>
        <Button variant="contained" onClick={this.handleAdd}>Submit {this.state.results[0] ? this.state.results[0].codeResult.code : 'No data scanned'}</Button>
      </div>
    )
  }
}

export default BarcodeScanner
