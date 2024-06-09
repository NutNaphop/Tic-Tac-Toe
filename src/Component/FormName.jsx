import { AppContext } from "@/App"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog"
import { useContext, useState } from "react"

export function FormName({ startGame }) {
    const {setPlayer1, setPlayer2 } = useContext(AppContext)
    const [name1 , setName1] = useState('')
    const [name2 , setName2] = useState('')

    const handleSubmit = () => {
        console.log('SM')
        if (name1 !== ''){
            setPlayer1(name1)
        }
        else if (name1 === ''){
            setPlayer1('Player1')
        }
        if (name2 !== ''){
            setPlayer2(name2)
        }
        else if (name2 === ''){
            setPlayer2('Player2')
        }
        
        startGame()
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Start Game</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Set A Name</DialogTitle>
                    <DialogDescription>
                        This Name will display in Game , Name it cool
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name1"
                            value={name1}
                            onChange={(e) => setName1(e.target.value)}
                            className="col-span-3"
                            placeholder='Player1'
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name2"
                            value={name2}
                            onChange={(e) => setName2(e.target.value)}
                            className="col-span-3"
                            placeholder='Player2'
                        />
                    </div>
                </div>
                <DialogFooter>
                <DialogClose asChild>
                    <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
