import { Button, TextField } from "@mui/material"
import styles from './Form.module.scss'
import { FC } from "react";

type TProps = {
    name: string;
}

export const Form: FC<TProps> = ({name}) => {

return <div className={styles.form}>
  <Button variant="contained">Submit</Button>
  <TextField id="standard-basic" label={name} variant="standard" />
</div>
}