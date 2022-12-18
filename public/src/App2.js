import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

function App2() {
    useEffect(() => {
        alanBtn({
            key:"44170e5eba6b229e9de083988f2fa2902e956eca572e1d8b807a3e2338fdd0dc/stage"
        })
    },[]);
    return(
        <div className="App2">
            <h1>hi</h1>
        </div>

    );
}
export default App2 ;