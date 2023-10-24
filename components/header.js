import React from "react";
import { Box, Pressable, Image,  } from "native-base";
import Icon from "native-base/src/theme/components/icon";

// Functional Component with props
const Header = (props) => {
  return (
    <Box
      bg={'#AA0002'}
      flexDirection="row"
      justifyContent="space-between"
      p=('15px') >
      <Pressable onPress={() => props.drawer.current.openDrawer()}>
        <Image source={require("../assets/menu.png")} w={'18px'} h={'18px'} />
      </Pressable>
      <Box>
        <Box flexDirection='row' alignItems="center" justifyContent="center">
          <Icon source={require("../assets/facebook.png")} />
          <Icon source={require("../assets/youtube.png")} />
          <Icon source={require("../assets/twitter.png")} />
          <Icon source={require("../assets/search.png")} />
        </Box>  
      </Box>
    </Box>          
  );
};

const Icon =

export default Header;
