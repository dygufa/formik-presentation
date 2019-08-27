const Formulario = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
            />
            {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
            <button type="submit">Submit</button>
        </form>
    );
};

const FormularioComFormik = withFormik({
    mapPropsToValues: () => ({ name: '' }),
    validate: values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Não pode ficar em branco';
        }
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(Formulario);