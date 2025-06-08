import { Typography } from "@mui/material"
import { NewsCard } from "./DashBoardStyle"

function NewsWidget() {

    return (
        <NewsCard>
            <Typography variant="h6">LinkedIn News</Typography>
            <Typography variant="subtitle2">Top stories</Typography>
            <ul>
                <li>Nvidia reclaims most valuable crown</li>
                <li>10 dead in Bengaluru stampede</li>
                <li>Staffing firms focus on GCCs</li>
                <li>Banks invest in mutual funds</li>
                <li>How US tariffs impact steelmakers</li>
            </ul>

            <Typography variant="subtitle2">Today's puzzles</Typography>
            <ul>
                <li>Zip - Complete the path</li>
                <li>Tango - Harmonize the grid</li>
                <li>Queens - Crown each region</li>
            </ul>
        </NewsCard>
    )
}

export default NewsWidget
