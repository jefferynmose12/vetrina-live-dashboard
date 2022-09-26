import person from '../../../assets/images/person.svg';
import iphone from '../../../assets/images/iPhone.svg';
import world from '../../../assets/images/world.svg';
import extension from '../../../assets/images/extension.svg';
import googleplay from '../../../assets/images/googleplay.png';

export const StarGreen = () => {
  return (
    <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.0209 9.9238H17.3207L14.0156 0L10.7002 9.9238L0 9.91373L8.66552 16.0532L5.35011 25.9669L14.0156 19.8375L22.6708 25.9669L19.3657 16.0532L28.0209 9.9238Z" fill="#00B67A"/>
    </svg>
  )
}

export const Person = () => {
  return (
    <img src={person} alt='person' />
  )
}

export const Iphone = () => {

  const styles = {
    img : {
      height : '190px'
    }
  }

  return (
    <img src={iphone} alt='person' style={styles.img} />
  )
}

export const GooglePlay = () => {

  const styles = {
    img : {
      height : '20px'
    }
  }

  return (
    <img src={googleplay} alt='person' style={styles.img} />
  )
}

export const ExtensionIcon = () => {

  return (
    <img src={extension} alt='person' />
  )
}

export const WorldIcon = () => {

  return (
    <img src={world} alt='person' />
  )
}