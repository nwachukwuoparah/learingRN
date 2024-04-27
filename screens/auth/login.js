import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Container, { Wrapper } from '../../components/container'
import Typography from '../../components/typography'

export default function Login({ navigation, route }) {

  return (
    <Container>
      <Wrapper>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Typography type="text24">
            login
          </Typography>
        </TouchableOpacity>
      </Wrapper>
    </Container>
  )
}

const styles = StyleSheet.create({

})