import { FC, useState } from "react";
import { TextInput, TextInputProps } from "keep-react";
import { EyeSlash, Lock, Eye } from "phosphor-react";

export const InputPassword: FC<TextInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const EyeIcon = showPassword ? Eye : EyeSlash;

  const onTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextInput
      sizing="lg"
      type={showPassword ? "text" : "password"}
      addon={<Lock size={20} className="text-gray-400" />}
      addonPosition="left"
      icon={
        <EyeIcon
          size={20}
          className="text-gray-400 cursor-pointer pointer-events-auto"
          onClick={onTogglePassword}
        />
      }
      iconPosition="right"
      {...props}
    />
  );
};
