import { Typography } from "@mui/material"
import { SectionContent } from "./Profilestyle"

interface Props {
  title: string,
  joining: string,
  leaving: string,
  description: string
}

function Experience(props: Props) {
  const { title, joining, leaving, description } = props

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    }); 
  };

  return (
    <SectionContent>
      <Typography fontWeight={500}><h4>{title}</h4></Typography>
      <Typography variant="body2" color="textSecondary">{`${formatDate(joining)} – ${formatDate(leaving)}`}</Typography>
      <Typography variant="body2">{description}</Typography>
    </SectionContent>
  )
}

export default Experience
