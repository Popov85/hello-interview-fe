import React, {useState, memo, useCallback} from 'react';

type Item = { name: string };

type ListItemProps = {
    name: string;
    checked: boolean;
    onChange: (name: string, isChecked: boolean) => void;
};

const ListItem: React.FC<ListItemProps> = memo(({name, checked, onChange}) => (
    <li>
        <input
            type="checkbox"
            id={name}
            checked={checked}
            onChange={(e) => onChange(name, e.target.checked)}
        />
        <label htmlFor={name}>{name}</label>
    </li>
));


type ListProps = {
    towns: Item[];
    cars: Item[];
};

export default function List({towns, cars}: ListProps) {

    const [selectedTowns, setSelectedTowns] = useState(new Set<string>());

    const [selectedCars, setSelectedCars] = useState(new Set<string>());

    const handleTownsChange = useCallback((name: string, isChecked: boolean) => {
        setSelectedTowns((prev) => {
            const next = new Set(prev);
            if (isChecked) {
                next.add(name);
            } else {
                next.delete(name);
            }
            return next;
        });
    }, []);

    const handleCarsChange = useCallback((name: string, isChecked: boolean) => {
        setSelectedCars((prev) => {
            const next = new Set(prev);
            if (isChecked) {
                next.add(name);
            } else {
                next.delete(name);
            }
            return next;
        });
    }, []);

    const handleSubmit = () => {
        const payload = {
            towns: [...selectedTowns],
            carBrands: [...selectedCars],
        };
        console.log('Submitting:', payload);
        alert(
            `Selected Towns: ${payload.towns.join(', ') || 'None'}\n` +
            `Selected Car Brands: ${payload.carBrands.join(', ') || 'None'}`
        );
    };

    return (
        <>
            <h3>Visited towns</h3>
            <ul>
                {towns.map((town) => (
                    <ListItem
                        key={town.name}
                        name={town.name}
                        checked={selectedTowns.has(town.name)}
                        onChange={handleTownsChange}
                    />
                ))}
            </ul>

            <h3>Wished cars</h3>
            <ul>
                {cars.map((car) => (
                    <ListItem
                        key={car.name}
                        name={car.name}
                        checked={selectedCars.has(car.name)}
                        onChange={handleCarsChange}
                    />
                ))}
            </ul>

            <button type="button" onClick={handleSubmit}>Submit</button>
        </>
    );
}
