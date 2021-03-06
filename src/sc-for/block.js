import './style.scss'
import './editor.scss'
const { __ } = wp.i18n
import MarkText from '../components/MarkText.jsx'
const { registerBlockType } = wp.blocks
const { InspectorControls  } = wp.blockEditor
const { PanelBody, __experimentalNumberControl : NumberControl, __experimentalInputControl : InputControl } = wp.components
const { Fragment } = wp.element
registerBlockType( 'digital-blocks/sc-for', {
	title: __( 'Serivce Cambodia For', 'CEGOV' ),
	icon: 'admin-page',
	category: 'digital-blocks',
	keywords: [
		__( 'service', 'CEGOV' ),
		__( 'cambodia', 'CEGOV' ),
		__( 'for', 'CEGOV' ),
		__( 'egov block', 'CEGOV' )
	],
	attributes: {
		mark_text: {
            type: 'string',
			default: 'Service Cambodia For'
		},
		toggle_panel: {
			type: 'boolean',
			default: false
		},
		api: {
			type: 'string',
			default: ''
		},
		service_for: {
			type: 'string',
			default: ''
		},
		service_level: {
			type: 'string',
			default: ''
		},
		page: {
			type: 'string',
			default: ''
		}
	},
	edit: ( { attributes, setAttributes } ) => {
		const {
			mark_text, 
			toggle_panel,
			api,
			service_for,
			service_level,
			page
		} = attributes

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<MarkText
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					</PanelBody>
					<PanelBody 
						title={ __( 'Block Options', 'CEGOV' ) }
						initialOpen={ toggle_panel }
						onToggle={ () => {
							setAttributes( { toggle_panel: ! toggle_panel } ) 
						} }
					>
						<InputControl
							label={ __( 'Rest Api (URL)', 'CEGOV' ) }
							value={ api }
							onChange={ ( value ) => setAttributes( { api: value } ) }
						/>
						<InputControl
							label={ __( 'Service For (ID)', 'CEGOV' ) }
							value={ service_for }
							onChange={ ( value ) => setAttributes( { service_for: value } ) }
						/>
						<InputControl
							label={ __( 'Service Level (ID)', 'CEGOV' ) }
							value={ service_level }
							onChange={ ( value ) => setAttributes( { service_level: value } ) }
						/>
						<InputControl
							label={ __( 'Destination Page (URL)', 'CEGOV' ) }
							value={ page }
							onChange={ ( value ) => setAttributes( { page: value } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ 'border p-3' }>
					<small>{ mark_text }</small>
				</div>
			</Fragment>
		)
	},
	
	save: ( { attributes } ) => {
		return null
	}
} )