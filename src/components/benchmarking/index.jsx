import {

    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,

} from "@/components/ui/table"


const BenchmarkingJSX = ( props ) => {

    const formatNumber = ( number ) => {

        if( number < 100)
            return number + " MB"
        if( number/1000 < 1000)
            return number/1000 + " GB"
        if( number/1000 < 10000 )
            return number/1000000 + " TB"
        if( number/1000 < 100000 )
            return number/1000000 + " TB"
        if( number/1000 < 1000000 )
            return number/1000000 + " TB"
        if( number/1000 < 10000000 )
            return number/1000000000 + " PB"

        return number

    }
    const formatPrice = ( hits, unit, discount ) => {

        if( hits < discount )
            return "$" + 0
        else {

            let hits_bandwidth = (hits) - discount
            return "$" + (hits_bandwidth * unit / 1000).toLocaleString()

        }

    }
    const { data } = props
    return (
        <div className="flex flex-col gap-10">
            <h1 className="font-semibold">Benchmarking Home Page</h1>
            <Table>
                <TableCaption>Type Split</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Type</TableHead>
                        <TableHead className="text-center">Current Size (Kb)</TableHead>
                        <TableHead className="text-center">Current Size (Mb)</TableHead>
                        <TableHead className="text-center">Blupp Size (Kb)</TableHead>
                        <TableHead className="text-center">Blupp Size (Mb)</TableHead>
                        <TableHead className="text-center">Change (Mb)</TableHead>
                        <TableHead className="text-center">Change %</TableHead>
                        <TableHead className="text-center">Less %</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {

                        data.data.map( ( value ) => {
                            return (
                                <TableRow className={ value.type === "Total" ? "font-semibold" : "" }>
                                    <TableCell className="font-semibold">{ value.type }</TableCell>
                                    <TableCell className="text-center">{ value.current_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.current_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ value.blupp_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.blupp_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ((value.current_size - value.blupp_size)/1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.current_size*100).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.blupp_size*100).toFixed(2) }</TableCell>
                                </TableRow>
                            )

                        })
                    }
                </TableBody>
            </Table>
            <h1 className="font-semibold">Bandwidth Saved</h1>
            <Table>
                <TableCaption>Bandwidth Saved</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Hits</TableHead>
                        <TableHead className="text-right">Current Bandwidth</TableHead>
                        <TableHead className="text-right">Blupp Bandwidth</TableHead>
                        <TableHead className="text-right">Saved Bandwidth</TableHead>
                        <TableHead className="text-right">Cloudfront Cost ($0.1/GB)</TableHead>
                        <TableHead className="text-right">Vercel Cost ($0.4/GB)</TableHead>
                        <TableHead className="text-right">Prismic Cost ($0.2/GB)</TableHead>
                        <TableHead className="text-right font-semibold">Blupp Cost ($0.05/GB)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {

                        data.bandwidth.map( ( value ) => {
                            return (
                                <TableRow className={ value.type === "Total" ? "font-semibold" : "" }>
                                    <TableCell className="font-semibold">{ value.hits_text }</TableCell>
                                    <TableCell className="text-right">{ formatNumber (value.current_size * value.hits) }</TableCell>
                                    <TableCell className="text-right">{ formatNumber( value.blupp_size * value.hits ) }</TableCell>
                                    <TableCell className="text-right">{ formatNumber( (value.current_size * value.hits) -  (value.blupp_size * value.hits) ) }</TableCell>
                                    <TableCell className="text-right">{ formatPrice( value.current_size * value.hits , .1, 1000000 ) }</TableCell>
                                    <TableCell className="text-right">{ formatPrice( value.current_size * value.hits , .4, 1000000 ) }</TableCell>
                                    <TableCell className="text-right">{ formatPrice( value.current_size * value.hits , .2, 500000 ) }</TableCell>
                                    <TableCell className="text-right font-semibold">{ formatPrice( value.blupp_size * value.hits , .05, 1000000 ) }</TableCell>
                                </TableRow>
                            )

                        })
                    }
                </TableBody>
            </Table>
        </div>
    )

}

export default BenchmarkingJSX
