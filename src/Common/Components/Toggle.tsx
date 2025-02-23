import ReactSwitch from 'react-switch'

export const Toggle = ({
  checked,
  onChange,
}: Pick<React.ComponentProps<typeof ReactSwitch>, 'checked' | 'onChange'>) => {
  return (
    <ReactSwitch
      height={20}
      width={40}
      uncheckedIcon={false}
      checkedIcon={false}
      checked={checked}
      onChange={onChange}
    />
  )
}
