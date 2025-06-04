import { SectionContent } from './Profilestyle'
import { Typography } from '@mui/material'

interface Props {
    title:string;
    description:string;
}

function Education(props: Props) {
    const {title,description} = props

    return (
        <SectionContent>
          <Typography fontWeight={500}><h4>{title}</h4></Typography>
          <Typography variant="body2" color="textSecondary">{description}</Typography>
        </SectionContent>
    )
}

export default Education
