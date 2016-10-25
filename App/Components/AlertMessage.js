import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import styles from './Styles/AlertMessageStyle'
import { Metrics } from '../Themes/'

export default class AlertMessage extends React.Component {
  render() {
    const messageComponent = null
    if (this.props.show) {
      const { title } = this.props
      return (
        <Animatable.View
          style={[styles.container, this.props.style]}
          delay={800}
          animation='bounceIn'
        >
          <View style={styles.contentContainer}>
            <Icon
              name={this.props.icon || 'ios-alert'}
              size={Metrics.icons.large}
              style={styles.icon}
            />
            <Text 
              allowFontScaling={false} 
              style={styles.message}
            >
              {title && title.toUpperCase()}
            </Text>
          </View>
        </Animatable.View>
      )
    }

    return messageComponent
  }
}

AlertMessage.propTypes = {
  style: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  show: React.PropTypes.bool
}

AlertMessage.defaultProps = {
  show: true
}
