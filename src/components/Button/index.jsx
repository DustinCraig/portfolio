import { ButtonBack } from './ButtonBack'
import { ButtonFront } from './ButtonFront'

export default (props) => (
  <ButtonBack
    alt={props.alt}
    onClick={props.onClick}
    form={props.form}
    disabled={props.disabled}
  >
    {props.children}
    <ButtonFront alt={props.alt} form={props.form} disabled={props.disabled}>
      {props.children}
    </ButtonFront>
  </ButtonBack>
)
