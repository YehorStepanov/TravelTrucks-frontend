'use client';
import css from './FiltersSidebar.module.css';
import { FilterOptions } from '@/types/Truck';
import { Formik, Form, Field } from 'formik';
import Svg from '../Svg/Svg';

interface FiltersSidebarProps {
  initialValues: FilterOptions;
  onChange: (filters: FilterOptions) => void;
}
export default function FiltersSidebar({
  initialValues,
  onChange,
}: FiltersSidebarProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onChange({ ...values, page: 1 });
      }}
    >
      {() => (
        <Form className={css.sidebar}>
          {/* Location */}
          <div className={css.locationDiv}>
            <label className={css.locationLabel} htmlFor="location">
              Location
            </label>
            <div className={css.parent}>
              <svg className={css.svgImage} width="20" height="20">
                <use href={`/img/sprite.svg#icon-map`}></use>
              </svg>
              <Field
                className={css.locationField}
                id="location"
                name="location"
                placeholder="Kyiv, Ukraine"
                type="text"
              />
            </div>
          </div>
          <h2 className={css.textFilters}>Filters</h2>
          {/* Vehicle equipment (multi) */}
          <div>
            <h3 className={css.equipmentTitle}>Vehicle equipment</h3>
            <hr className={css.smallLine} />
            <div className={css.fields}>
              <label className={css.field}>
                <Field
                  className={css.input}
                  type="checkbox"
                  name="features"
                  value="AC"
                />
                <Svg name="AC" />
                AC
              </label>

              <label className={css.field}>
                <Field
                  className={css.input}
                  type="checkbox"
                  name="features"
                  value="automatic"
                />
                <Svg name="Automatic" />
                Automatic
              </label>

              <label className={css.field}>
                <Field
                  className={css.input}
                  type="checkbox"
                  name="features"
                  value="kitchen"
                />
                <Svg name="Kitchen" />
                Kitchen
              </label>

              <label className={css.field}>
                <Field
                  className={css.input}
                  type="checkbox"
                  name="features"
                  value="TV"
                />
                <Svg name="Tv" />
                TV
              </label>

              <label className={css.field}>
                <Field
                  className={css.input}
                  type="checkbox"
                  name="features"
                  value="bathroom"
                />
                <Svg name="Bathroom" />
                Bathroom
              </label>
            </div>
          </div>

          {/* Form type (single) */}
          <div className={css.typeDiv}>
            <h3 className={css.equipmentTitle}>Vehicle type</h3>
            <hr className={css.smallLine} />
            <div className={css.fields}>
              <label className={css.field}>
                <Field
                  className={css.input}
                  type="radio"
                  name="form"
                  value="panelTruck"
                />
                <Svg name="Van" />
                Van
              </label>

              <label className={css.field}>
                <Field
                  className={css.input}
                  type="radio"
                  name="form"
                  value="fullyIntegrated"
                />
                <Svg name="Fully-Integrated" />
                Fully Integrated
              </label>

              <label className={css.field}>
                <Field
                  className={css.input}
                  type="radio"
                  name="form"
                  value="alcove"
                />
                <Svg name="Alcove" />
                Alcove
              </label>
            </div>
          </div>
          <button className={css.searchButton} type="submit">
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
}
