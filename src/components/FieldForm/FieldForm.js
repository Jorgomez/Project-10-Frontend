import './FieldForm.css'

export const FieldForm = ({
  labelText,
  placeholder = 'fill this field',
  InputType = 'text',
  required = true
}) => {
  return `<div class="conteinerFieldForm">
             <label class = 'label' >${labelText}</label>
             <input class = 'input' type="${InputType}" required= "${required}" placeholder = "${placeholder}"/>
          </div>`
}
