import { Box, Input, Label } from 'theme/components';

export const RadioInput = ({
  name,
  value,
  label,
  id,
  checked,
  onChange,
  radioDotSx,
  itemProps
}) => {
  return (
    // In this case label is used as container to allow user have wider click space
    // how to use label source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
    <Box
      className="custom-checkbox-input"
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& ~ .custom-checkbox-input': {
          mt: ['1.6rem', '1.6rem', '1.6rem', '1.8rem']
        }
      }}>
      <CustomRadioButton
        name={name}
        value={value}
        id={id}
        checked={checked}
        onChange={onChange}
        sx={radioDotSx}
        itemProps={itemProps}
      />
      <Label
        htmlFor={id}
        sx={{
          variant: 'text.body-150-normal',
          color: 'texts.secondary',
          fontSize: ['1.4rem', '1.4rem', '1.5rem', '1.6rem'],
          pl: '1rem', //? use pl instead of margin to allow click
          cursor: 'pointer'
        }}>
        {label}
      </Label>
    </Box>
  );
};

const CustomRadioButton = ({
  sx,
  checked,
  checkedStyle = {},
  unCheckedStyle = {},
  itemProps,
  ...props
}) => {
  return (
    <Input
      type="radio"
      checked={checked}
      variant="forms.radio"
      sx={{
        cursor: 'pointer',
        appearance: 'none',
        width: ['1.8rem', '1.8rem', '2rem', '2rem'],
        height: ['1.8rem', '1.8rem', '2rem', '2rem'],
        border: `1px solid`,
        borderColor: 'transparent',
        borderRadius: '50%',
        display: 'flex',
        flexShrink: 0,
        bg: checked ? 'surfaces.darker' : 'neutral.teal',
        ...sx
      }}
      {...props}
      {...itemProps}
    />
  );
};
