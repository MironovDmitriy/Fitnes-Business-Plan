import React, {PureComponent} from 'react';
import GridContainer from 'proj/components/common/grid-container';
import GridRow from 'proj/components/common/grid-row';
import FieldText from 'proj/components/field-text';
import FieldCheckbox from 'proj/components/field-checkbox';
import FieldRadio from 'proj/components/field-radio';
import AcceptButton from 'proj/components/accept-button';
import {
	categories,
	childrensClubValues,
	spaValues,
	propertyType,
} from 'proj/constants/initialParameters.js';
import {
	Pool,
	ChildFriendly,
	Spa,
	WbSunny,
	LocalBar,
	FilterVintage,
	FitnessCenter,
	People,
	AccountBalance,
	Build,
	AccountBalanceWallet,
	Home,
} from 'proj/icons';

const iconStyles = {
	fontSize: '90px',
};

export default class DataInput extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			dataInput: {
				square: '',
				isRepairRequired: false,
				category: 'business',
				propertyType: 'ownership',
				rentalRate: '',
				propertyCost: '',
				beautyShop: false,
				fighting: false,
				fitnessBar: false,
				isPool: false,
				trackCount: '',
				trackLength: '',
				childrens: false,
				childrensValue: 'childrensClub',
				spa: false,
				spaSquare: '',
				bedCount: '',
				spaValue: 'spa',
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
			<GridContainer>
				<GridContainer xs={12}>
					<GridRow xs={12} sm={8} md={6} lg={3} xl={3}>
						<AccountBalance style={iconStyles} />
						<FieldText
							type="number"
							id="square"
							name="square"
							label="Общая площадь"
							unit="м.кв."
							value={dataInput.square}
							onChange={this.onHandleChange}
						/>
					</GridRow>
					<GridRow xs={12} sm={4} md={6} lg={3} xl={3}>
						<Build style={iconStyles} />
						<FieldCheckbox
							label="Требуется ли ремонт помещения?"
							name="isRepairRequired"
							checked={dataInput.isRepairRequired}
							onChange={this.onHandleChange}
						/>
					</GridRow>

					<GridRow xs={12} sm={12} md={12} lg={6} xl={6}>
						<GridContainer justify="space-around" color="red">
							<GridRow xs={12} sm={4} md={4} lg={4} xl={4}>
								<Spa style={iconStyles} />
								<FieldCheckbox
									label="СПА услуги"
									name="spa"
									checked={dataInput.spa}
									onChange={this.onHandleChange}
								/>
							</GridRow>
							<GridRow xs={12} sm={4} md={4} lg={4} xl={4}>
								<FieldRadio
									groupName="spaValue"
									isDisabled={!dataInput.spa}
									value={dataInput.spaValue}
									values={spaValues}
									onChange={this.onHandleChange}
									// helpType={dataInput.spaValue}
								/>
							</GridRow>
							<GridRow xs={12} sm={4} md={4} lg={4} xl={4}>
								{dataInput.spaValue === 'spa' && (
									<FieldText
										type="number"
										id="spaSquare"
										name="spaSquare"
										label="Площадь СПА"
										unit="м.кв."
										isDisabled={!dataInput.spa}
										value={dataInput.spaSquare}
										onChange={this.onHandleChange}
									/>
								)}
								{dataInput.spaValue === 'massageRoom' && (
									<FieldText
										type="number"
										id="bedCount"
										name="bedCount"
										label="Количество кушеток"
										unit="шт."
										isDisabled={!dataInput.spa}
										value={dataInput.bedCount}
										onChange={this.onHandleChange}
									/>
								)}
							</GridRow>
						</GridContainer>
					</GridRow>
				</GridContainer>

				<GridContainer xs={12} color="blue">
					<GridRow xs={12} sm={8} md={6} lg={3} xl={3}>
						<People style={iconStyles} />
						<FieldRadio
							groupName="category"
							value={dataInput.category}
							values={categories}
							onChange={this.onHandleChange}
							// helpType="category"
						/>
					</GridRow>

					<GridRow xs={12} sm={4} md={6} lg={3} xl={3}>
						<FitnessCenter style={iconStyles} />
						<FieldCheckbox
							label="Зона единоборств"
							name="fighting"
							checked={dataInput.fighting}
							onChange={this.onHandleChange}
						/>
					</GridRow>

					<GridRow sm={12} md={12} lg={6} xl={6}>
						<GridContainer justify="space-around">
							<GridRow xs={12} sm={4} md={4} lg={4} xl={4}>
								<Pool style={iconStyles}/>
								<FieldCheckbox
									label="Бассейн"
									name="isPool"
									checked={dataInput.isPool}
									onChange={this.onHandleChange}
								/>
							</GridRow>
							<GridRow xs={12} sm={4} md={4} lg={4} xl={4}>
								<FieldText
									type="number"
									id="trackCount"
									name="trackCount"
									label="Количество дорожек"
									unit="шт."
									isDisabled={!dataInput.isPool}
									value={dataInput.trackCount}
									onChange={this.onHandleChange}
								/>
							</GridRow>
							<GridRow xs={12} sm={4} md={4} lg={4} xl={4}>
								<FieldText
									type="number"
									id="trackLength"
									name="trackLength"
									label="Длина дорожек"
									unit="м."
									isDisabled={!dataInput.isPool}
									value={dataInput.trackLength}
									onChange={this.onHandleChange}
								/>
							</GridRow>
						</GridContainer>
					</GridRow>
				</GridContainer>

				<GridContainer xs={12}>
					<GridRow xs={12} sm={8} md={6} lg={3} xl={3}>
						<Home style={iconStyles} />
						<FieldRadio
							groupName="propertyType"
							// isDisabled={!dataInput.childrens}
							value={dataInput.propertyType}
							values={propertyType}
							onChange={this.onHandleChange}
							// helpType={dataInput.childrensValue}
						/>
					</GridRow>

					<GridRow xs={12} sm={4} md={6} lg={3} xl={3}>
						<LocalBar style={iconStyles} />
						<FieldCheckbox
							label="Фитнес бар"
							name="fitnessBar"
							checked={dataInput.fitnessBar}
							onChange={this.onHandleChange}
						/>
					</GridRow>

					<GridRow xs={12} sm={12} md={12} lg={6} xl={6}>
						<GridContainer>
							<GridRow xs={4}>
								<ChildFriendly style={iconStyles}/>
								<FieldCheckbox
									label="Детский фитнес"
									name="childrens"
									checked={dataInput.childrens}
									onChange={this.onHandleChange}
								/>
							</GridRow>
							<GridRow xs={4}>
								<FieldRadio
									groupName="childrensValue"
									isDisabled={!dataInput.childrens}
									value={dataInput.childrensValue}
									values={childrensClubValues}
									onChange={this.onHandleChange}
									// helpType={dataInput.childrensValue}
								/>
							</GridRow>
							<GridRow xs={4} />
						</GridContainer>
					</GridRow>
				</GridContainer>

				<GridContainer xs={12}>
					<GridRow  xs={12} sm={8} md={6} lg={3} xl={3}>
						<AccountBalanceWallet style={iconStyles} />
							{dataInput.propertyType === 'rent' && (
								<FieldText
									type="number"
									id="rentalRate"
									name="rentalRate"
									label="Ставка аренды"
									unit="м/год"
									value={dataInput.rentalRate}
									onChange={this.onHandleChange}
								/>
							)}
							{dataInput.propertyType === 'ownership' && (
								<FieldText
									type="number"
									id="propertyCost"
									name="propertyCost"
									label="Стоимость имущества"
									unit="руб."
									value={dataInput.propertyCost}
									onChange={this.onHandleChange}
								/>
							)}
					</GridRow>

					<GridRow xs={12} sm={4} md={6} lg={3} xl={3}>
						<FilterVintage style={iconStyles} />
						<FieldCheckbox
							label="Салон красоты"
							name="beautyShop"
							checked={dataInput.beautyShop}
							onChange={this.onHandleChange}
						/>
					</GridRow>

					<GridRow  xs={12} sm={12} md={12} lg={6} xl={6}>
						<GridContainer>
							<GridRow xs={4}>
								<WbSunny style={iconStyles} />
								<FieldCheckbox
									label="Солярий"
									name="solarium"
									checked={dataInput.solarium}
									onChange={this.onHandleChange}
								/>
							</GridRow>
							<GridRow xs={4}>
								<FieldText
									type="number"
									id="solariumCount"
									name="solariumCount"
									label="Количество"
									unit="шт."
									isDisabled={!dataInput.solarium}
									value={dataInput.solariumCount}
									onChange={this.onHandleChange}
								/>
							</GridRow>
							<GridRow xs={4}>
								<AcceptButton
									label="Рассчитать"
									name="calculate"
									type="contained"
									onClick={() => console.log('result')}
								/>
							</GridRow>
						</GridContainer>
					</GridRow>
				</GridContainer>
			</GridContainer>
		);
	};
};