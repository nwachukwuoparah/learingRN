import React from 'react'
import { TouchableOpacity } from 'react-native'
import Container, { Wrapper } from '../../components/container'
import Typography from '../../components/typography'

export default function SignUP({ navigation, route }) {

  return (
    <Container sx={{ backgroundColor: "blue" }}>
      <Wrapper>
        <TouchableOpacity onPress={() => navigation.navigate("bottomNavigation")}>
          <Typography type="text20">Sign up</Typography>
        </TouchableOpacity>

      </Wrapper>
    </Container>
  )
}
