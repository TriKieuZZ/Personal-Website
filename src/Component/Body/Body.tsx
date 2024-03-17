import { Form } from "../../feature/Form/Form"
import styles from "./Body.module.scss"

export const Body = () => {
    return <div className={styles.body}> 
    <Form name = "Email address"/> 
    <Form name = "Password"/> 
    </div>
}