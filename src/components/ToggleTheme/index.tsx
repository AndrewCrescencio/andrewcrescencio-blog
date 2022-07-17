import { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { useTheme } from 'next-themes';
import { Container } from './styles';
import { theme as themeStitches } from '../../../stitches.config';

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(true);
  const themeColor = themeStitches.colors.purple200.value;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    theme === 'light' ? setChecked(false) : setChecked(true);
  });
  const handleChange = () => {
    setChecked(!checked);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <Container>
      <Switch
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        onColor="#888888"
        onHandleColor={themeColor}
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        id="material-switch"
      />
    </Container>
  );
};
