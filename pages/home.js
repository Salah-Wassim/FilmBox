import React, { useState } from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default () => {

    const [logoText, setLogoText] = useState("FilmBox")

    return(
        <View style={styles.globalContent}>
            <Text style={styles.logoText}>{logoText}</Text>
            <View style={styles.descriptionContent}>
                <Text style={styles.descriptionText}>
                    
                </Text>
            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})