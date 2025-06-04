import { Typography } from "@mui/material"
import { SectionContent } from "./Profilestyle"

interface Props {
      title:string,
      joining:string,
      leaving:string,
      description:string
}

function Experience(props: Props) {
    const {title,joining,leaving,description} = props

    return (
        <SectionContent>
          <Typography fontWeight={500}><h4>{title}</h4></Typography>
          <Typography variant="body2" color="textSecondary">{joining}-{leaving}</Typography>
          <Typography variant="body2">{description}</Typography>
        </SectionContent>
    )
}

export default Experience
