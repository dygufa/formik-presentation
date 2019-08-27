<Formik
    initialValues={{ email: '' }}
    onSubmit={(values, { setSubmitting }) => {
        // Lógica de submissão
    }}
    // validate={}
    validationSchema={Yup.object().shape({
        email: Yup.string()
            .email('Email inválido')
            .required('Você não pode deixar em branco!'),
    })}
>
    {props => {
        const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
        } = props;
        return (
            <form onSubmit={handleSubmit}>
                {/* <Form> */}
                <input
                    id="email"
                    placeholder="Seu email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.email && touched.email ?
                            'text-input error' :
                            'text-input'
                    }
                />
                {/* <Field type="email" name="email" /> */}
                {errors.email && touched.email && (
                    <div className="input-feedback">
                        {errors.email}
                    </div>
                )}
                {/* <ErrorMessage name="email" component="div" /> */}
                <button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                >
                    Resetar
                </button>
                <button type="submit" disabled={isSubmitting}>
                    Enviar
                </button>
                {JSON.stringify(props, null, 2)}
            </form>
        );
    }}
</Formik>