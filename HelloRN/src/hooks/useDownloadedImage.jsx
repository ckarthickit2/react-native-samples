import RNFetchBlob from 'rn-fetch-blob'
import { useState } from 'react'
import { useEffect } from 'react';

export const useDownloadedImage = (imageURI) => {
   const [localPath, setLocalPath] = useState();
   const filePath = RNFetchBlob.fs.dirs.DocumentDir + 'test_cache.jpg';
   useEffect(()=> {
       if(RNFetchBlob.fs.exists(filePath)) {
        setLocalPath(filePath);
       }else {
        RNFetchBlob
        .config({
            // fileCache: true
            path: filePath
        })
        .fetch('GET', imageURI)
        .then((res) => {
             console.log('The file saved to ', res.path())
             setLocalPath(res.path());
        })
       }
   }, [imageURI])
   return localPath;
}