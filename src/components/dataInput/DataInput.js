import React, {PureComponent} from 'react';
import FieldText from 'proj/components/field-text';
import FieldCheckbox from 'proj/components/field-checkbox';
import FieldRadio from 'proj/components/field-radio';
import AcceptButton from 'proj/components/accept-button';
import styled from 'styled-components';
import {categories, childrensClubValues, spaValues} from 'proj/constants/services.js';

const SectionContainer = styled.form`
	display: grid;
	grid-template-rows: [one] 33% [two] 33% [three] 34% [four];
	grid-template-columns: [one] 33% [two] 33% [three] 34% [four];
`

const FieldContainer = styled.div`
	border: 1px solid black;
	margin 3px;
`

export default class DataInput extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			dataInput: {
				category: 'business',
				square: '',
				isPool: false,
				poolSquare: '',
				fighting: false,
				childrens: false,
				childrensValue: 'club',
				spa: false,
				spaSquare: '',
				bedCount: '',
				spaValue: 'spa',
				beautyShop: false,
				fitnessBar: false,
				solarium: false,
				solariumCount: '',
			},
		};
	};

	onHandleChange = (value, name) => {
		const {dataInput} = this.state;

		const newValue = {
			...dataInput,
				[name]: value,
		};
console.log(newValue);
		this.setState({dataInput: newValue})
	};

	render() {
		const {dataInput} = this.state;

		return (
			<SectionContainer>
				<FieldContainer>
					<FieldText
						type="number"
						id="square"
						name="square"
						label="Общая площадь"
						unit="м.кв."
						value={dataInput.square}
						onChange={this.onHandleChange}
					/>
				</FieldContainer>

				<FieldContainer>
					<FieldRadio
						groupName="category"
						value={dataInput.category}
						values={categories}
						onChange={this.onHandleChange}
					/>
				</FieldContainer>

				<FieldContainer>
					<FieldCheckbox
						label="Бассейн"
						name="isPool"
						checked={dataInput.isPool}
						onChange={this.onHandleChange}
					/>
					{dataInput.isPool && (
						<FieldText
							type="number"
							id="poolSquare"
							name="poolSquare"
							label="Площадь бассейна"
							unit="м.кв."
							value={dataInput.poolSquare}
							onChange={this.onHandleChange}
						/>
					)}
				</FieldContainer>

				<FieldContainer>
					<FieldCheckbox
						label="Зона единоборств"
						name="fighting"
						checked={dataInput.fighting}
						onChange={this.onHandleChange}
					/>
				</FieldContainer>

				<FieldContainer>
					<FieldCheckbox
						label="Детский фитнес"
						name="childrens"
						checked={dataInput.childrens}
						onChange={this.onHandleChange}
					/>
					{dataInput.childrens && (
						<FieldRadio
							groupName="childrensValue"
							value={dataInput.childrensValue}
							values={childrensClubValues}
							onChange={this.onHandleChange}
						/>
					)}
				</FieldContainer>

				<FieldContainer>
					<FieldCheckbox
						label="СПА услуги"
						name="spa"
						checked={dataInput.spa}
						onChange={this.onHandleChange}
					/>
					{dataInput.spa && (
						<FieldRadio
							groupName="spaValue"
							value={dataInput.spaValue}
							values={spaValues}
							onChange={this.onHandleChange}
						/>
					)}

					{dataInput.spa && dataInput.spaValue === "spa" && (
						<FieldText
							type="number"
							id="spaSquare"
							name="spaSquare"
							label="Площадь СПА"
							unit="м.кв."
							value={dataInput.spaSquare}
							onChange={this.onHandleChange}
						/>
					)}
					{dataInput.spa && dataInput.spaValue === "massageRoom" && (
						<FieldText
							type="number"
							id="bedCount"
							name="bedCount"
							label="Количество кушеток"
							unit="шт"
							value={dataInput.bedCount}
							onChange={this.onHandleChange}
						/>
					)}
				</FieldContainer>

				<FieldContainer>
					<FieldCheckbox
						label="Салон красоты"
						name="beautyShop"
						checked={dataInput.beautyShop}
						onChange={this.onHandleChange}
					/>
				</FieldContainer>

				<FieldContainer>
					<FieldCheckbox
						label="Фитнес бар"
						name="fitnessBar"
						checked={dataInput.fitnessBar}
						onChange={this.onHandleChange}
					/>
				</FieldContainer>

				<FieldContainer>
					<FieldCheckbox
						label="Солярий"
						name="solarium"
						checked={dataInput.solarium}
						onChange={this.onHandleChange}
					/>
					{dataInput.solarium && (
						<FieldText
							type="number"
							id="solariumCount"
							name="solariumCount"
							label="Количество"
							unit="шт"
							value={dataInput.solariumCount}
							onChange={this.onHandleChange}
						/>
					)}
				</FieldContainer>

				<FieldContainer>
					<AcceptButton
						label="Рассчитать"
						name="calculate"
						type="contained"
						onClick={() => console.log('result')}
					/>
				</FieldContainer>
			</SectionContainer>
		);
	};
};
