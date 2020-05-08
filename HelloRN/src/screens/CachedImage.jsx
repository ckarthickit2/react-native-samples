import React from 'react'
import { StyleSheet, Text, Image} from 'react-native'
import { useDownloadedImage } from '../hooks/useDownloadedImage'

const styles = StyleSheet.create({
    imageStyle: {
      width: 193,
      height: 110,
      resizeMode: 'center',
    },
    containerStyle: {
      top: '2%',
      alignItems: 'center',
    },
  });

const CachedImage = props => {
    const localPath = useDownloadedImage('https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview')
    if(localPath == null) {
        return <Text>Loading...</Text>
    }else {
        console.log(`platform os = ${Platform.OS}, localPath = ${localPath}`)
        return (<Image
        source={{
          uri: Platform.OS === 'android' ? 'file://' + localPath : '' + localPath,
        }}
        style={styles.imageStyle}
        key={'index'}
      />);
    }
}


export default CachedImage