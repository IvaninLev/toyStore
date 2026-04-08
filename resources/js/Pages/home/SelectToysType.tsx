import bear from '@/../images/StuffedBear.svg';
import wooden from '@/../images/WoodenToy.svg';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';

export default function SelectToysType() {
    return (
        <section
            className="align- container flex h-100 items-center justify-center"
            style={{ fontFamily: 'Varela round' }}
        >
            <div className="mt-[15%] flex h-100 flex-row space-x-8">
                <Card className="flex h-47 w-142.5 items-center justify-center border-0 bg-[#FFC12C] pl-30">
                    <img src={bear} className="absolute mr-[30%] mb-[6%]"></img>
                    <CardTitle style={{ fontSize: 28, fontWeight: 400 }}>
                        Stuffed Animals
                    </CardTitle>
                    <Button
                        className="mr-25 h-12 w-30 rounded-3xl"
                        style={{ fontSize: 13 }}
                    >
                        Shop now
                    </Button>
                </Card>
                <Card className="flex h-47 w-142.5 items-center justify-center border-0 bg-[#FB416B] pr-30">
                    <img
                        src={wooden}
                        className="absolute mb-[6%] ml-[30%]"
                    ></img>
                    <CardTitle style={{ fontSize: 28, fontWeight: 400 }}>
                        Wooden Toys
                    </CardTitle>
                    <Button
                        className="ml-15 h-12 w-30 rounded-3xl"
                        style={{ fontSize: 13 }}
                    >
                        Shop now
                    </Button>
                </Card>
            </div>
        </section>
    );
}
