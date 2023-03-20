import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import '../styles/home.scss'

import cc from '../assets/corpus.gif'

function download(){
  window.location.href = 'https://drive.google.com/drive/folders/17uPkwJAaofuJ1_spFAHe4nDS_t27YkF_';
}

function Home() {
  return (
    <div className='container'>
        <Navbar />

        <div className='home-view'>

            <div className='home-left'>

                <span className='home-name'>InCCsight Software</span>
                <span className='home-descript'>An open source neuroimaging toolkit for processing, analyzing, and visualizing the Corpus Callosum MR images.</span>
                <button className='btn-home' onClick={download}>Download</button>

            </div>

            <div className='home-rigth'>
                <img src={cc} alt="" className='ccgif'/>
            </div>

        </div>

    </div>
  )
}

export default Home