import BottomSheetPage from '@/components/BottomSheet'
import { useState } from 'react'
import {Button, SafeAreaView, Text, View} from 'react-native'

export default function Explore() {
  
  const [pageOpened, setPageOpened] = useState(false)

    const handleOpenPage = () => {
      setPageOpened(true);
    }

  return ( 
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Explore Page</Text>
        <Button title="Open page" onPress={handleOpenPage}></Button>

        {pageOpened && 
          <BottomSheetPage onClose = {() => setPageOpened(false)} />
        }
      </View>
    </SafeAreaView>
  )
}